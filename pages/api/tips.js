let tips=[
    "All our dreams can come true, if we have the courage to pursue them —Walt Disney",
    "The secret of getting ahead is getting started. —Mark Twain",
    "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed —Michael Jordan",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Only the paranoid survive.",
    "It’s hard to beat a person who never gives up.",
    "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.",
    "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
    "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "Everything you can imagine is real.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    "Do one thing every day that scares you.",
    "It’s no use going back to yesterday, because I was a different person then.",
    "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
    "Do what you feel in your heart to be right―for you’ll be criticized anyway.",
    "Happiness is not something ready made. It comes from your own actions.",
    "The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.",
    "If we have the attitude that it’s going to be a great day it usually is.",
    "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    "Impossible is just an opinion.",
    "Your passion is waiting for your courage to catch up.",
    "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
    "If something is important enough, even if the odds are stacked against you, you should still do it.",
    "Hold the vision, trust the process.",
    "Don’t be afraid to give up the good to go for the great.",
    "People who wonder if the glass is half empty or full miss the point. The glass is refillable."
]

let tipOfTheDay=[tips[Math.floor(Math.random()*tips.length)]]

export default function handler(req, res) {
   
    res.status(200).json({ Tip : tipOfTheDay })
}

async function getTips(req,res){
    res.status(200).json({ name: 'Inside getTips function.......' })
}