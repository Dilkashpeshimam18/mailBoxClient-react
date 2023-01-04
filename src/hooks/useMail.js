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
    const userMail = useSelector((state) => state.email.userMail)


    const getUserMail = async (type) => {
        try {

            let email = localStorage.getItem('email')
            const response = await axios.get('https://newsday-io-default-rtdb.firebaseio.com/allMail.json')
            let res = response.data
            let data = []
            for (let key in res) {
                data.push({
                    id: key,
                    sendFrom: res[key].sendFrom,
                    sendTo: res[key].sendTo,
                    subject: res[key].subject,
                    message: res[key].message,
                    read: res[key].read


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
            } else if (selectedTab == 'Unread') {
                let userUnreadMail = data.filter((mail) => {
                    return mail.read == false
                })
                dispatch(emailActions.addAllUnreadMail(userUnreadMail))

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

    const handleIsReadMail = async (id) => {
        let unreadIndex = userMail.findIndex((email) => email.id === id)
        let unreadMail = userMail[unreadIndex]
        let updatedMail;
        let updatedAllMails
        if (unreadMail) {
            updatedMail = {
                ...unreadMail,
                read: true
            }

        }
        updatedAllMails = [...userMail]
        updatedAllMails[unreadIndex] = updatedMail
        dispatch(emailActions.updateUserMail(updatedAllMails))
        try {
            const response = await axios.put(`https://newsday-io-default-rtdb.firebaseio.com/allMail/${id}.json`, updatedMail)
                .then(() => {
                    getUserMail()
                })


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
                sendFrom: senderEmail,
                sendTo: email,
                subject: subject,
                message: value,
                read: false
            }
            dispatch(emailActions.addSendToEmail(receiverName))
            localStorage.setItem('sendToEmail', receiverName)
            const response = await axios.post(`https://newsday-io-default-rtdb.firebaseio.com/allMail.json`, mail)

        } catch (err) {
            console.log(err)
        }

    }
    return { getUserMail, deleteMail, storeMail, email, setEmail, value, setValue, subject, setSubject, handleIsReadMail }
}
export default useMail;