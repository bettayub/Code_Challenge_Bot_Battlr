import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
    const [bots, setBots] = useState([]);
    const [botArmy, setBotArmy] = useState([]);
    
    useEffect(() => {
      fetch("https://json-server2-vercel-nine.vercel.app/bots")
      .then (res => res.json())
      .then (bots => setBots(bots))
    }, []);
  
  console.log(bots)