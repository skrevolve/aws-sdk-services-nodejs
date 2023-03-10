import AWS from 'aws-sdk'
import { MailTemplate } from '../src/mail_template'

AWS.config.loadFromPath(`${__dirname}/src/config/aws_config.json`)

// send email by aws mail template
const mailTemplate = new MailTemplate(new AWS.SES())

const userEmailList = [
    'test@gmail.com',
    'test2@gmail.com',
]

mailTemplate.createTemplate(); // if you dont have mail template
mailTemplate.sendBulkTemplateEmail(userEmailList);
mailTemplate.deleteTemplate(); // if you want to delete template
