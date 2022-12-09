export default function handler(req, res) {
   
    res.status(200).json({ name: 'Inside TIPS.......' })
  }

async function getTips(req,res){
    res.status(200).json({ name: 'Inside getTips function.......' })
}