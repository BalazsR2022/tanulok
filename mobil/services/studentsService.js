/*
* File: studentsService.js
* Author: Balázs Réka
* Copyright: 2024, Balázs Réka
* Group: Szoft II/1
* Date: 2024-04-06
* Github: https://github.com/BalazsR2022/tanulok.git
* Licenc: GNU GPL
*/

const host ="http://localhost:8000/";
const endpoint = 'students';

export async function getStudents(){
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}