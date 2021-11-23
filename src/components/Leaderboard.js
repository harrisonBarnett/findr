import React from 'react';
import { useState, useEffect } from 'react'

import { db } from '../firebase_config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

import styled from 'styled-components'
const StyledContainer = styled.div`
background: red;
`

const Leaderboard = props => {

    const [newName, setNewName] = useState('')
    const [players, setPlayers] = useState([])
    const playersCollectionRef = collection(db, 'players')

    const addPlayer = async () => {
        await addDoc(playersCollectionRef, {name: newName, score: props.score})
    }
    useEffect(() => {
        const getPlayers = async () => {
            const data = await getDocs(playersCollectionRef)
            setPlayers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getPlayers()
    }, [playersCollectionRef])
    return (
        <StyledContainer>
            <h1>this is the leaderboard</h1>
            <h3>add your score to the leaderboards</h3>
            <input 
            id='leaderboard-input'
            onChange={(event) => {setNewName(event.target.value)}}></input>
            <button onClick={addPlayer}>add your score</button>
            <div 
            id='leaderboard-list'>
                {players.map((player)=> {
                    return <div key={player.id}>
                            <p>{player.name}</p>
                            <p>{player.score}</p>
                        </div>
                })}
            </div>
        </StyledContainer>
    );
};

export default Leaderboard;