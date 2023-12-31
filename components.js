import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddMobile({ mobile, setMobile }) {
    const history = useHistory()
    //defining states
    const [mobileName, setMobileName] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState("");
    const [model, setModel] = useState();
    const [price, setPrice] = useState("");
    const [Ram, setRam] = useState("");
    const [storage, setStorage] = useState("");

    const addNewMobile = () => {
        const newmobile = {
            id,
            mobileName,
            image,
            model,
            price,
            Ram,
            storage
        }
        console.log(newmobile)
        setMobile([...mobile, newmobile])
        history.push("/")
    }

    return (
        <BaseApp
            title={"Add A New Mobile"}
        >
            <div className="add-continar">
                <div className="add-card">
                    <ul type="none">
                        <li><input
                            placeholder="id"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        /></li>

                        <li><input
                            placeholder="mobileName"
                            value={mobileName}
                            onChange={(event) => setMobileName(event.target.value)}
                        /></li>

                        <li><input
                            placeholder="image"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                        /></li>

                        <li><input
                            placeholder=" model"
                            value={model}
                            onChange={(event) => setModel(event.target.value)}
                        /></li>

                        <li><input
                            placeholder="price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        /></li>
                        <li><input
                            placeholder="Ram"
                            value={Ram}
                            onChange={(event) => setRam(event.target.value)}
                        /></li>

                        <li><input
                            placeholder="storage"
                            value={storage}
                            onChange={(event) => setStorage(event.target.value)}
                        /></li>

                        <li> <button
                            className="btn add-btn"
                            onClick={addNewMobile}
                        >Add New Mobile</button>
                        </li>
                    </ul>
                </div>
            </div>
        </BaseApp>
    )
}
