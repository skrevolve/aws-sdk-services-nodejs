import AWS from 'aws-sdk'
import { Mail } from '../src/mail'

AWS.config.loadFromPath(__dirname + '/src/config/aws_config.json')

// send email by nodemailer
const mail = new Mail(new AWS.SES({ apiVersion: '2010-12-01' }))

const mailResult = await mail.send('test@gmail.com')
if (!mailResult) console.error('mail send err')