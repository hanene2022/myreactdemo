import React from 'react'
import {useState} from 'react'
export default function Indice() {
const [poids, setPoids]= useState('');
const [taille, setTaille]= useState('');
const [resultat, setResultat]= useState(null);
const [message, setMessage]= useState('');
const calculateIcm =(e)=>{
    e.preventDefault();
    const poidkg = parseFloat(poids);
    const tailleM = parseFloat(taille)
    const imc = poidkg / (tailleM * tailleM)
    setResultat(Math.round(imc));
    interpreteImc();
}
const interpreteImc= ()=>{
 
    if (resultat < 20){
        setMessage('maigre');}
        else if (resultat <=25){setMessage('normale');}
        else{setMessage('surpoids');}

    }
  return (
    <div>
      <form>
        <h1>Calculer  votre IMC ({poids} {taille})</h1>
        <div className='mb-3'>
        <label htmlFor="poid" className='form-label'>Poids</label>
        <input  type='number' className='form-control' id='poids'
         placeholder='Poids en kg' value={poids}
         onChange={(e)=>setPoids(e.target.value)}
         /> 
        </div>
        <div className='mb-3'>
        <label htmlFor="taille" className='form-label'>Taille</label>
        <input  type='number' className='form-control' id='taille' placeholder='taille en m'
         value={taille}
         
         onChange={(e)=>setTaille(e.target.value)}/> 
        </div>
        <button onClick={calculateIcm} className='btn btn-primary'>Calculer</button>
        { resultat!== null &&(<div>
<h2>votre icm est de  {resultat}</h2>
<p>interpretion:{message}</p>
        </div>)}
        </form>  
        
        </div>
  )
}
