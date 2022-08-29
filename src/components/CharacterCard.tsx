import { ResultChar } from "../Types/ApiData"
import '../styles/charactercard.css';
import { useAppDispatch, useAppSelector } from "../store";
import { useState } from "react";
import { setFav } from "../features/baseSlice";

interface IResultChar {
    item: ResultChar
}

const CharacterCard = (props: IResultChar) => {
    const { item } = props;
    return (
        <div className="cardContainer" >
            <div className="cardLeft">
                <img src={item.image} alt={item.name}></img>
            </div>
            <div className="cardRight">
                <span>{item.name}</span>
                <span>{item.status}</span>
            </div>
        </div>
    )
}

export default CharacterCard;