const Design = require('../models/Design');
const nodemailer = require('nodemailer');

const createDesign = async (req, res) => {
  try {
    const newDesign = new Design(req.body);
    const savedDesign = await newDesign.save();
    res.status(201).json(savedDesign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDesigns = async (req, res) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 });
    res.json(designs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDesignById = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDesignStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const design = await Design.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDesign = async (req, res) => {
  try {
    const design = await Design.findByIdAndDelete(req.params.id);
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json({ message: 'Design deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sendDesignEmail = async (req, res) => {
  const { design } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SHOP_EMAIL,
      bcc: design.customerEmail,
      subject: `New Custom Design Order - ${design.customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #D4AF37; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A0A0A; padding: 20px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0;">SG LuxeJewels</h1>
            <p style="color: #FFF; margin: 5px 0 0;">New Custom Design Order</p>
          </div>
          <div style="padding: 20px; background-color: #111;">
            <h2 style="color: #D4AF37;">Customer Details</h2>
            <p style="color: #F5F5F5;"><strong>Name:</strong> ${design.customerName}</p>
            <p style="color: #F5F5F5;"><strong>Email:</strong> ${design.customerEmail}</p>
            <p style="color: #F5F5F5;"><strong>Phone:</strong> ${design.customerPhone}</p>
            <h2 style="color: #D4AF37;">Design Specification</h2>
            <ul style="color: #F5F5F5;">
              <li><strong>Type:</strong> ${design.jewelleryType}</li>
              <li><strong>Material:</strong> ${design.material}</li>
              <li><strong>Stone:</strong> ${design.stone} (${design.stoneSize})</li>
              <li><strong>Size/Length:</strong> ${design.ringSize || 'N/A'}</li>
              <li><strong>Engraving:</strong> ${design.engraving || 'None'}</li>
              <li><strong>Quantity:</strong> ${design.quantity}</li>
              <li><strong>Estimated Price:</strong> ₹${design.estimatedPrice}</li>
            </ul>
            <p style="color: #F5F5F5;"><strong>Special Instructions:</strong><br>${design.specialInstructions || 'None'}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDesign,
  getDesigns,
  getDesignById,
  updateDesignStatus,
  deleteDesign,
  sendDesignEmail
};
