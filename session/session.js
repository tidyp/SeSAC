import express from 'express'
import session from 'express-session'

const app = express()
const port = 3002

app.use(session({
  secret: 'mySecretKey', // 세션 데이터를 암호화 하기 위한 키
  resave: false, // 세션 데이터가 변경되지 않아도 다시 저장할지 여부
  saveUninitialized: true // 초기화되지 않은 세션을 저장소에 저장할지 여부
}))

// 미들웨어를 사용한 사용자의 방문횟수 트래킹
app.use((req, res, next) => { 
  req.session.visitCount = req.session.visitCount || 0

  req.session.visitCount++

  console.log(`SessionID: ${req.sessionID}`)
  next()
 })

app.get('/', (req, res) => { 
  res.send(`당신의 방문횟수는 ${req.session.visitCount}입니다.`)
 })


app.listen(port, () => { 
  console.log(`${port} 서버 준비...`)
 })