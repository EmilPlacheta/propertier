const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

//@route    POST api/contacts
//@desc     Add new contacts
//@access   Private
router.post(
  '/',
  [
    auth,
    [
      check('propertyName', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { propertyName, tenant, rent, stage } = req.body;

    try {
      const newContact = new Contact({
        propertyName,
        tenant,
        rent,
        user: req.user.id,
        stage
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error. (While creating a contact)');
    }
  }
);

//@route    PUT api/contacts/:id
//@desc     Update contact
//@access   Private
router.put('/:id', auth, async (req, res) => {
  const { propertyName, tenant, rent, stage } = req.body;

  //Build a contact object
  const contactFields = {};
  if (propertyName) contactFields.propertyName = propertyName;
  if (tenant) contactFields.tenant = tenant;
  if (rent) contactFields.rent = rent;
  if (stage) contactFields.stage = stage;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found.' });

    //Make sure user owns the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error. (While updating the contact)');
  }
});

//@route    DELETE api/contacts/:id
//@desc     DElete contact
//@access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found.' });

    //Make sure user owns the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msf: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error. (While updating the contact)');
  }
});

module.exports = router;
