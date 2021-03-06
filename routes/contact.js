const express = require('express');
const router = express.Router();

// @route       GET api/contact
// description  Get all users contacts
//@ access      Private

router.get('/', (req, res) => {
    res.send('Get all contacts');
});   

// @route       POST api/contact
// description  Add new contact
//@ access      Private

router.post('/', (req, res) => {
    res.send('Add contact');
});   

// @route       PUT api/contact/:id
// description  Update contact
//@ access      Private

router.put('/:id', (req, res) => {
    res.send('Update contact');
});    

// @route       DELETE api/contact/:id
// description  Delete contact
//@ access      Private

router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});    

module.exports = router;