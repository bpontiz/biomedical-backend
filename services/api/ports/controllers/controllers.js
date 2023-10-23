const express = require('express');

const controller = {
index: (req, res) => {
    res.send('Home in controllers');
},

equipment: (req, res) => {
    res.send('Equipment from controller');
},

category: (req, res) => {
    res.send('Category from controller endpoint');
},

item: (req, res) => {
    res.send('Item from controller');
},

users: (req, res) => {
    res.send('Users is working from controllers');
},

login: (req, res) => {
    res.send('Login is here!')
},

register: (req, res) => {
    res.send('Register is here!')
},

operators: (req, res) => {
    res.send('Profile is working');
},

};

module.exports = controller;

