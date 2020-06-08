import {useState} from "react";
import React from 'react';
import { View, StyleSheet } from 'react-native';
export const login = (username,password) =>{
    //local data
    const lessons = [
        {
            name: 'Course Overview',
            totalTime: '2:04',
            contentList: [{name: 'Course Overview', time: '2:04'}],
        },
        {
            name: 'Getting Started with Angular',
            totalTime: '38:45',
            contentList: [{name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25',}, {name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }],
        },]
    const description = 'Introduction of this course test test testtesttesttesttesttesttest test test testv  test test  test test test\n' +
        '                      Introduction of this course test test testtes ttesttesttesttest test test test testv  test test  test test test\n' +
        '                      Introduction of this course test test testt esttest t es tt esttesttest test test testv  test test  test test test\n' +
        '                      Introduction of this course test test testtestt e sttestte sttesttest test test testv  test test  test test test\n' +
        '                      Introduction of this course test test testtesttesttestte sttesttest test test testv  test test  test test test\n' +
        '                      Introduction of this course test test testt esttesttesttesttesttest test test testv  test test  test test test'
    const courseC ={id:1,description:description, bookmark: false, lessons:lessons, title: 'C', author: [{id:1,username:'Thao'}] , level:'Advance', releasedDate: 'May 2020', duration: '50 hours', rating : 4, ratingNumber: 406,}
    const courseAlgorithms ={id:2,description:description, bookmark: false, lessons:lessons, title: 'Algorithms', author: [{id:1,username:'Thao'}] , level:'Advance', releasedDate: 'May 2020', duration: '50 hours', rating : 4, ratingNumber: 406,}
    const authorHai ={id:1,username:'Hai Pham',email:'thisisanemail@gmail.com', avatar:'',authorCoursesList:[courseC,courseAlgorithms], description:description}
    const authorHieu= {id:2,email:'thisisanemail@gmail.com', username:'Hieu', avatar:'',authorCoursesList:[courseC,courseAlgorithms],description:description}
    const authorNam = {id:3,email:'thisisanemail@gmail.com', username:'Nam', avatar:'',description:description,authorCoursesList:[courseC,courseAlgorithms]}
    const authorVi = {id:4,email:'thisisanemail@gmail.com', username:'Vi', avatar:'',description:description,authorCoursesList:[courseC,courseAlgorithms]}
    const authorThy= {id:5,email:'thisisanemail@gmail.com', username:'Thy', avatar:'',description:description,authorCoursesList:[courseC,courseAlgorithms]}
     const courseReact ={id:1,bookmark: false, description:description, lessons:lessons, title: 'React Native', author: [authorHai,authorHieu,authorNam] , level:'Advance', releasedDate: 'May 2020', duration: '50 hours', rating : 4, ratingNumber: 406,}
     const courseJava ={id:2,bookmark: false, description:description, lessons:lessons, title: 'Java', author: [authorHai,authorHieu,authorVi,authorThy] , level:'Beginner', releasedDate: 'May 2020', duration: '50 hours', rating : 5, ratingNumber: 2811,}
     const courseGameDevelopment = {id:3, description:description,bookmark: false, lessons:lessons, title: 'Game Development', author: [authorHieu,authorNam] , level:'Beginner', releasedDate: 'June 2020', duration: '50 hours', rating : 3, ratingNumber: 2811,}
     const courseMobile ={id:4, description:description,bookmark: false, lessons:lessons, title: 'Mobile', author: [authorThy] , level:'Beginner', releasedDate: 'June 2020', duration: '50 hours', rating : 3, ratingNumber: 2811,}
     const courseCSharp = {id:6, description:description,bookmark: false, lessons:lessons, title: 'C#', author: [authorHieu] , level:'Beginner', releasedDate: 'June 2020', duration: '50 hours', rating : 3, ratingNumber: 2811,}
    const pathReactNative ={id:1, description:description, title: 'React Native',coursesList:[courseReact,courseMobile] ,coursesNumber:2, progress:80}
    // const pathPHP = {id:2, description:description, title: 'PHP',coursesList:[coursePHP] ,coursesNumber:1, progress:70}
     const pathMobile = {id:3, description:description, title: 'Mobile',coursesList:[courseJava,courseMobile] ,coursesNumber:2, progress:30}
     const pathGameDevelopment= {id:4, description:description, title: 'Game Development',coursesList:[courseGameDevelopment,courseCSharp] ,coursesNumber:2, progress:50}
    // const coursesList=[courseReact,courseCSharp,courseJava,courseMobile,courseGameDevelopment]
    // const pathList=[pathReactNative,pathPHP,pathMobile]
    // const authorList=[authorHai,authorHieu,authorNam,authorVi,authorThy]
     const topicCSharp ={id:1,name:'C#',  pathList:[pathGameDevelopment], newCoursesList:[courseCSharp,courseGameDevelopment], trendingCoursesList:[courseGameDevelopment], authorList:[authorHieu,authorNam]}
     const topicMobile ={id:2,name:'Mobile',pathList:[pathMobile,pathReactNative], newCoursesList:[courseMobile], trendingCoursesList:[courseJava,courseMobile,courseReact], authorList:[authorHieu,authorNam,authorHai,authorThy,authorVi]}
     const topicList = [topicCSharp,topicMobile]

    // const newList=[courseCSharp,courseGameDevelopment,courseMobile]
    // const recommendList=[coursePHP,courseReact,courseMobile,courseJava]

// const authorCoursesList=[{id:1, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
//     {id:2, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
//     {id:3, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
//     {id:4, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}]
//
//
// //coursesList for testing
// const coursesList=[
//     {id:1, title: 'React Native', author: authorList , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
//     {id:2, title: 'Java', author: authorList , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
//     {id:3, title: 'Game Development', author: authorList , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
// //pathList for testing
// const pathList=[
//     {id:1, title: 'React Native',coursesList:coursesList ,coursesNumber:12, progress:80},
//     {id:2, title: 'Java',coursesList:coursesList, coursesNumber:25, progress:80},
//     {id:3, title: 'PHP',coursesList:coursesList, coursesNumber:12, progress:80},]
//     const [favoritesList,setFavoritesList] = useState([])

    if(username.toLowerCase()==='hieu'){
        if(password.toLowerCase()==='thao'){
            return {status: 200, userInfo:{username,email:'buitrihieu@gmail.com',
                    continueList: [courseJava,courseMobile,courseGameDevelopment,courseCSharp],
                    totalActiveDays:20, mostActiveTime:'8pm',
                    mostViewedSubject:'Managerial Skills',
                    interestTopicList:topicList,
                    favoritesList:[],}
        }}
        else {
            return {status:404, errorString: 'Wrong password'}
        }
    }
    else
        {
            return {status:404, errorString: 'This username is not existed '}
        }

}
