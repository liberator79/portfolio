import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
    const contacts = [
        {
            text: "phone number",
            value: "+91 6303120217",
            href: "tel:916303120217",
            Icon: BsFillTelephoneFill,
        },
        {
            text: "email",
            value: "itskalyan.262@gmail.com",
            href: "mailto:itskalyan.262@gmail.com",
            Icon: MdOutlineEmail,
        },
        {
            text: "LinkedIn",
            value: "Kalyan Reddy Tiyyagura",
            href: "https://www.google.com",
            Icon: FaLinkedin
        },
        {
            text : "GitHub",
            value : "liberator79",
            href  : "https://github.com/liberator79",
            Icon : FaGithub
        }

    ]
    return (
        <div className="w-11/12 mx-auto">
            {
                contacts.map(({ text, value, href, Icon }, index) => {
                    return (
                        <div className="flex items-center gap-3 mt-3 ml-2" key={index}>
                            <h1 className="text-yellow-200 w-36">{text}</h1>
                            <a href={href}>
                                <div className="flex gap-2 items-center">
                                    <div><Icon /></div>
                                    <div>{value}</div>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Contact
