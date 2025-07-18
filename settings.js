export const settings = {
    // Bot Configuration
    botName: 'Queen',
    version: '1.0',
    prefix: '.',

    // Owner Configuration
    ownerNumber: '919356055210', // Replace with actual owner number
    ownerNumbers: ['919356055210@s.whatsapp.net'], // Multiple owner numbers for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNjdWhrT2kwSkRuOHNndWYyaURKQTdqdlpDUlJLZy8zUE5oTmowS0RHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGl5VWxacXJLdTNBYjhOanZMcWNHczU5VVJMZ3VjeDNXWWNrM2N5T0VBMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SWI3UE9HWmsyc0VnOS9Hb0FqSVBMREFYZTRBMFB3MUVqU08xZFpwTEd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkb1M0YWg1QVFDQUdmcTd1MkRDUmh2UFR4TFVqVVdqM1JqQjlyaDExQ2p3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPVHh6TW9rYnY4UXBPV21JM0VJSm16MlZNVzRUUzBTT1pCYmlFQkpvWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ2UklQZWlCK2VLL3lkVXhCMnFzZjMxT1kvZEsyazRqSXJTUnVmUTZ3ZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRkRkwyTXBQb29JM1lHRWtsbUtBc1krL2ZnRjhQaTZySlhTZC9QcWxXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE5HbS9JbnlwMzl0Nkx3dUx5Vk9IejFXakdaV3drT0JFejM0bHVuOHVRRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFoQ01GM1k5U0x6WjVEQjZDaHNDaVlueGtVbVRyakNHeTJtT0hIeklkeGorU1huT0ZzTldFV2pKdmc4dGI0RGVadXlJcVQzeXF3SE90QkFHTi9OQmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6ImROSFZaREVucERMVUxUd3JiNlpobEd1TlVtT21oV2dXRERMeUNGVXFwVUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MzU2MDU1MjEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgwNENEMTJFQ0Q1N0U3MEJFRDYyNEIzODgzMzRCMThBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI4NTAyMTd9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkI4WlhQOTdZIiwibWUiOnsiaWQiOiI5MTkzNTYwNTUyMTA6NTZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDQ0NDM4MDEyMDI1OjU2QGxpZCIsIm5hbWUiOiJESUUgRk9SIE1FIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPenlxUEVIRVAyOTZjTUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwNURwdzhTVktHaE1YbEFLUFdDZmdFemV3c21yeWo5bi90K2h1bnFTV2pZPSIsImFjY291bnRTaWduYXR1cmUiOiJ5RWE5Q29ySXp4MHRyV2Vlekx4T2NtVVpuK1pzTktTK3JCd2kwRCtHcWRlMjVuSk5nd0pXTFZZaFpoWW5BYWhSeGFrR1VnY2RlSURpaVo4b2F2cXlBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWW93b1dqR05kK244b0s2eER6V3VQZ0hDT2prTnpRZElwMlJQRmNWdGUxUUpZeW1Ca2poa3V5cEdwMkZMR0svSE95QzBsa3Q4UFN6NG8zL1RTZ3V5amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkzNTYwNTUyMTA6NTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZE9RNmNQRWxTaG9URjVRQ2oxZ240Qk0zc0xKcThvL1ovN2ZvYnA2a2xvMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyODUwMTg2LCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBjdiJ9",  //get from the link in the README.md

    // API Keys
    geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyArdMt3se0P2U5PCWjprpBZlzGZ2bHJklg',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBvVo--Jslb084-F8ATSWgsgqOl2JVh660',
    geniusApiKey: "NrGLCWeRCNlny8qtUzXhxalvAwWWjcjWdwyCe3aUrXJZLlzs3lwSd5ddu_Iy3q5O", // Get from https://genius.com/api-clients
    openaiApiKey: "", // Get from https://platform.openai.com/account/api-keys
    truecallerId: 'a1i0x--L2j_d8lF4BTFZ7e3p0t',
    truecallerId: process.env.TRUECALLER_ID || '',

    // Profile Pictures
    profilePics: [
        'https://files.catbox.moe/mq8b1n.png',
        'https://files.catbox.moe/dm7w9d.jpeg',
        'https://files.catbox.moe/0j5tnz.jpeg',
        'https://files.catbox.moe/b7wnah.jpeg',
        'https://files.catbox.moe/oo7yfn.jpeg',
        'https://files.catbox.moe/57l61y.jpeg',
        'https://files.catbox.moe/q64syc.jpeg'
    ],

    // Anti-spam settings
    antiSpam: {
        enabled: false,
        maxMessages: 5,
        timeWindow: 60000, // 1 minute
        cooldownTime: 30000 // 30 seconds
    }
};
