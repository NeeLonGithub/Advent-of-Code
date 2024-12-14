import fs from "fs";

const BASE_URL = 'https://adventofcode.com'
const sessionToken = fs.readFileSync('session-token.txt', 'utf8')

const date = new Date()
const year = date.getFullYear()
const day = date.getDate()

const requestUrl = `${BASE_URL}/${year}/day/${day}/input`
const reqHeaders = new Headers()
reqHeaders.set('Cookie', `session=${sessionToken}`)
const request = new Request(requestUrl, { headers: reqHeaders })

const filePathBase = `${year}/aoc${day.toString().padStart(2, '0')}`

fetch(request)
    .then((response) => response.text())
    .then((text) => {
        fs.writeFile(
            `${filePathBase}.input`,
            text,
            (e) => {
                if (e) {
                    console.error(e)
                } else {
                    console.log(`Downloaded input file for year ${year} day ${day} to ${filePathBase}.input`)
                }
            });
        fs.writeFile(
            `${filePathBase}.example`,
            '',
            (e) => {
                if (e) {
                    console.error(e)
                } else {
                    console.log(`Created EMPTY example file for year ${year} day ${day} as ${filePathBase}.example`)
                }
            });
        fs.writeFile(
            `${filePathBase}.js`,
            `import fs from 'fs'

const raw = fs.readFileSync('${filePathBase}.example', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('${filePathBase}.input', 'utf8').slice(0, -1)

const lines = raw.split('\\n')`,
            (e) => {
                if (e) {
                    console.error(e)
                } else {
                    console.log(`Created boilerplate for year ${year} day ${day} in ${filePathBase}.js`)
                }
            });
    })
    .catch((e) => console.error(e))
