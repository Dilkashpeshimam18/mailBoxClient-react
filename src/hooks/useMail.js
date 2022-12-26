import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emailActions } from "../store/slice/email-slice";
import axios from "axios";

const useMail = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const selectedTab = useSelector(state => state.home.isSeletedTab)

    const getUserMail = async (type) => {
        try {

            let email = localStorage.getItem('email')
            const response = await axios.get('https://newsday-io-default-rtdb.firebaseio.com/allMail.json')
            let res = response.data
            let data = []
            for (let key in res) {
                data.push({
                    id: key,
                    sendFrom: res[key].send_from,
                    sendTo: res[key].send_to,
                    subject: res[key].subject,
                    message: res[key].value,
                    read: false

                })
            }

            if (selectedTab == 'Inbox') {
                let userReceivedEmail = data.filter((mail) => {
                    return mail.sendTo == email
                })
                dispatch(emailActions.addUserMail(userReceivedEmail))
            } else if (selectedTab == 'Sent') {
                let userSentEmail = data.filter((mail) => {
                    return mail.sendFrom == email
                })
                dispatch(emailActions.addAllSentMail(userSentEmail))
            }

            dispatch(emailActions.reverseMail())


        } catch (err) {
            console.log(err)
        }

    }

    const deleteMail = async (id) => {
        try {
            const response = await axios.delete(`https://newsday-io-default-rtdb.firebaseio.com/allMail/${id}.json`)
            if (response.status == 200) {
                alert('Mail deleted successfully!')
                getUserMail()
            }
        } catch (err) {
            console.log(err)
        }
    }

    const storeMail = async () => {
        try {
            let senderEmail = localStorage.getItem('email')
            let splittedEmail = senderEmail.split('@')
            let splitted = email.split("@");
            let receiverName = splitted[0].replace(/\./g, "")
            let mail = {
                send_from: senderEmail,
                send_to: email,
                subject: subject,
                value: value,
                read: false
            }
            dispatch(emailActions.addSendToEmail(receiverName))
            localStorage.setItem('sendToEmail', receiverName)
            const response = await axios.post(`https://newsday-io-default-rtdb.firebaseio.com/allMail.json`, mail)

        } catch (err) {
            console.log(err)
        }

    }
    return { getUserMail, deleteMail, storeMail, email, setEmail, value, setValue, subject, setSubject }
}
export default useMail;