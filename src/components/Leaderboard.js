import React from 'react';
import { useState, useEffect } from 'react'

import { db } from '../firebase_config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

import styled from 'styled-components'
const StyledContainer = styled.div`
    height: 100%;
`
const StyledSubmitContainer = styled.div`
    padding: 2.5vmax;
    position: fixed;
    bottom: 0;
    left: 10%;
    right: 10%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    background: #ba2317;
    border-radius: .5em .5em 0 0;
    box-shadow: 1px 1px 4px rgba(44, 81, 95, 0.75),
                -1px -1px 4px rgba(44, 81, 95, .75);
`
const StyledPlayerlist = styled.div`
   padding-bottom: 12vmax;
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: 1em;
`
const StyledEntry = styled.div`
    min-width: 600px;
    padding: 2.5vmax;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    font-size: 2.5vmax;
    text-transform: uppercase;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,.15);
    background: #2cd7f1;
    border-radius: .5em;
    box-shadow: 1px 1px 4px rgba(44, 81, 95, 0.35),
    -1px -1px 4px rgba(44, 81, 95, .35);
`

const Leaderboard = props => {
    const [nameSubmit, setNameSubmit] = useState(false)

    const [newName, setNewName] = useState('')
    const [players, setPlayers] = useState([])
    const playersCollectionRef = collection(db, 'players')

    const addPlayer = async () => {
        setNameSubmit(true)
        setNewName('')
        await addDoc(playersCollectionRef, {name: newName, score: props.score, h: props.h, m: props.m, s: props.s, ms: props.ms})
    }
    useEffect(() => {
        const getPlayers = async () => {
            const data = await getDocs(playersCollectionRef)
            setPlayers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPlayers()
    }, [playersCollectionRef])
    useEffect(() => {
        setNameSubmit(false)
    }, [props.score])
    return (
        <StyledContainer>
            <StyledSubmitContainer>
                <h3>add your score to the annals of find-o-rama history</h3>
                <div>
                    <input 
                    id='leaderboard-input'
                    value={newName}
                    onChange={(event) => {setNewName(event.target.value)}}
                    style={{
                        opacity: nameSubmit ? '.5' : '1',
                        pointerEvents: nameSubmit ? 'none' : 'all'
                    }}></input>
                    <button 
                    onClick={addPlayer}
                    style={{
                        opacity: nameSubmit ? '.5' : '1',
                        pointerEvents: nameSubmit ? 'none' : 'all'
                    }}>add your score</button>
                </div>
            </StyledSubmitContainer>
            
            <StyledPlayerlist 
            id='leaderboard-list'>
                {players.map((player)=> {
                    return <StyledEntry key={player.id}>
                            <p>{player.name}</p>
                            <p>{player.h}:{player.m}:{player.s}:{player.ms}</p>
                        </StyledEntry>
                })}
            </StyledPlayerlist>
        </StyledContainer>
    );
};

export default Leaderboard;