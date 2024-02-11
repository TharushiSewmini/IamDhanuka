const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const getemail = async (req, res) => {
  const { userEmail, name, contactnumber, companyName } = await req.body;

  let config = {
    service: "gmail",
    auth: {
      user: "codingtestsewmini@gmail.com",
      pass: "qyer xnrt glrf qeub",
    },
  };

  let transporter = nodemailer.createTransport(config);

  let Mailgenerator = new Mailgen({
    theme: "default",
    product: {
      name: "DHANUKA PORTOFILO",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: name,
      intro: "you email sent successfully",
      table: {
        data: [
          {
            item: companyName,
            description: contactnumber,
            product: "nothing",
          },
        ],
      },
      outro: "Your most welcomed to here",
    },
  };

  let mail = Mailgenerator.generate(response);
  let message = {
    from: "codingtestsewmini@gmail.com",
    to: userEmail,
    subject: "THANK YOUU...You will be contacted soon",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should have an email received successfully",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = getemail;
