
const Wig = require('../models/wig');

// Get all wigs
const getAllWigs = async (req, res) => {
  try {
    const wigs = await Wig.find();
    res.status(200).json(wigs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching wigs', error });
  }
};

// Get a single wig by ID
const getWigById = async (req, res) => {
  try {
    const wig = await Wig.findById(req.params.id);
    if (!wig) {
      return res.status(404).json({ message: 'Wig not found' });
    }
    res.status(200).json(wig);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching wig', error });
  }
};

// Create a new wig
const createWig = async (req, res) => {
  try {
    const newWig = new Wig(req.body);
    await newWig.save();
    res.status(201).json(newWig);
  } catch (error) {
    res.status(400).json({ message: 'Error creating wig', error });
  }
};

// Update a wig by ID
const updateWig = async (req, res) => {
  try {
    const updatedWig = await Wig.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedWig) {
      return res.status(404).json({ message: 'Wig not found' });
    }
    res.status(200).json(updatedWig);
  } catch (error) {
    res.status(400).json({ message: 'Error updating wig', error });
  }
};

// Delete a wig by ID
const deleteWig = async (req, res) => {
  try {
    const deletedWig = await Wig.findByIdAndDelete(req.params.id);
    if (!deletedWig) {
      return res.status(404).json({ message: 'Wig not found' });
    }
    res.status(200).json({ message: 'Wig deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting wig', error });
  }
};

module.exports = {
  getAllWigs,
  getWigById,
  createWig,
  updateWig,
  deleteWig
};


