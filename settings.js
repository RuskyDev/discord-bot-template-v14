//   ____            _          
//  |  _ \ _   _ ___| | ___   _ 
//  | |_) | | | / __| |/ / | | |
//  |  _ <| |_| \__ \   <| |_| |
//  |_| \_\\__,_|___/_|\_\\__, |
//                        |___/ 
// © 2025 RuskyDev - https://rusky.is-a.dev
// DO NOT ADD SENSITIVE INFORMATION HERE, such as API keys, tokens, or secrets. Add them to your environment variables instead.

const settings = {
    PREFIX: "!",
    
    // Changes may take a few minutes to reflect on your Discord bot.
    ACTIVITY_TEXT: "with /help",
    ACTIVITY_TYPE: "Playing", // Options: Playing, Listening, Competing, Watching
    ACTIVITY_STATUS: "Online", // Options: Idle, Online, DoNotDisturb, Invisible
    ACTIVITY_MOBILE_ONLINE_STATUS: false, // This will set your bot status to "Mobile Online" (Make sure ACTIVITY_STATUS is set to "Online" or it won't work)
};

module.exports = settings;