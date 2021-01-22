
import {GET_COLOR} from "./constants"



export function ChangeColor(e) {
    return { type: GET_COLOR, payload:e }
  };