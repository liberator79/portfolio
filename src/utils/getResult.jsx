import { Component } from "react";
import Help from "../components/commands/Help";
import Contact from "../components/commands/Contact";
import NotFound from "../components/commands/NotFound";
import Skills from "../components/commands/Skills";
import Bio from "../components/commands/Bio";
const getResult = (cmd) => {
    switch (cmd) {
        case "ls":
            return {
                cmd,
                Component : Help,
                time : "",
            };
        case "contact":
            return {
                cmd,
                Component: Contact,
                time : "",
            }
        case "skill":
            return {
                cmd,
                Component :Skills,
                time : "",
            }
        case "bio":
            return {
                cmd, 
                Component : Bio,
                time : ""
            }
        default :
            return {
                cmd,
                Component : NotFound,
                time : "",
            }
    }
}

export default getResult
