const users =[{
  name: "John",
  kidneys:[{
    healthy:false
  },{
    healthy:true
  }]
}];


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  const user_kidney=users[0].kidneys;
  const kidneys_number = user_kidney.length;
  const healthy_kidneys_number = user_kidney.filter(kidney => kidney.healthy).length;
  const unhealthy_kidneys_number = user_kidney.filter(kidney => !kidney.healthy).length;
  res.json(
    {
      kidneys_number,
      healthy_kidneys_number,
      unhealthy_kidneys_number
    }
  )
});

app.post('/', (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.pop();
  users[0].kidneys.push({healthy: isHealthy});
  console.log(users[0].kidneys);
  res.json(
    {
      message: "Done Added!"
    }
  )
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


