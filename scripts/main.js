//import {getOfficers, useOfficers} from "./officers/OfficerProvider.js"

//getOfficers()
//    .then(() => {
//        const officerArray = useOfficers()
//    })



//import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

//getCriminals()
//    .then(() => {
//        const criminalArray = useCriminals()
//    
//    })
//    console.log(getCriminals)

import { CriminalList } from './criminals/CriminalList.js'

CriminalList()

import { OfficerList } from './officers/OfficerList.js'

OfficerList()

import { ConvictionSelect } from './Convictions/ConvictionSelect.js'

ConvictionSelect()