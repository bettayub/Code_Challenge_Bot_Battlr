import React from "react";

function BotCard({ bot, handleBot, handleDeleteBot }) {
  return (
    <div className="column">
      <div className="card" key={bot.id} onClick={() => handleBot(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          <div className="catch-phrase">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <p className="health">Health: {bot.health}</p>
          <p>
            <i className="damage" />
            Damage: {bot.damage}
          </p>
          <span>
            <i className="amor" />
            Amor: {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => handleDeleteBot(bot)}
              >X</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
