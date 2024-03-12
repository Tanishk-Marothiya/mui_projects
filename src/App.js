import './App.css';
import { Button , ButtonGroup} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Favorite ,FavoriteBorder, Widgets } from '@mui/icons-material';
import { useState } from 'react';
import {Checkbox ,Radio} from '@mui/material';
import {Slider} from '@mui/material';
import {Select,MenuItem} from '@mui/material';
import {TextField} from '@mui/material';
import {Switch} from '@mui/material';
import {Box} from '@mui/material';
import {Container} from '@mui/material';
import {Grid} from '@mui/material';
import {Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import {Hidden} from '@mui/material';
import {Tabs,Tab , AppBar} from '@mui/material';
function App() {
  const [color , setColor] = useState("success");
  const [disabledbtn , setDisabletbtn] = useState(false);
  const [name ,SetName]= useState([]);
  const [gender , SetGender]=useState("male");
  const mark=[
    {
      value : 0,
      label:"start",
    },
    {
      value : 100,
      label:"middle",
    },
    {
      value : 200,
      label:"end",
    },

  ]

  const [val ,setVal] = useState([40,50]);


  const customMe = () => {
      if(color == "success") setColor("error") ;
      else setColor("success") ;
  }

  const disableFunc = () =>  {
    setDisabletbtn(true) ;
  }

  const checkfunc = (e) => {
      let data=name;
      data.push(e.target.value)
      console.warn(name);
  }

  const RadioFunc = async (e)  => {
      SetGender(e.target.value);
      // setInterval(()=>console.warn(gender), 4000);
  }

  function getValue(e,val){
    console.warn(val);
  }

  function updateVal(e,val){
    setVal(val);
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    console.log("age....",event.target.value );
    setAge(event.target.value);
  };

  const getSwitch = (e,val) =>{
    console.warn("function called...",val);
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [valued , Setvalue] = useState(0)

  const handleTabs = (e,val) => {
    Setvalue(val);
    console.warn(val);
  }

  return (
    <div className="App" style={{textAlign:'center'}}>
        <h1>hello buddy</h1>
        <Button variant="outlined" color='error' onClick={() => { alert('clicked');}} size='large' >click me</Button> <br/>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={customMe} color={color} >Delete</Button><br/>
        <Button variant="contained" endIcon={<SendIcon />} disabled={disabledbtn} onClick={disableFunc} >Send</Button><br/><br/>

        <ButtonGroup variant='outlined' color='error' size='large' orientation='vertical'>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup><br/>

        <Checkbox color='error' value="tanishk" onChange={checkfunc} />
        <Checkbox color='error' value="Ajay" onChange={checkfunc} />
        <Checkbox color='error' value="saksham" onChange={checkfunc} />
        <Checkbox color='error' value="vijay" indeterminate onChange={checkfunc} />
        <Checkbox color='secondary' value="shanvi"  onChange={checkfunc} />
        <Checkbox color='secondary' value="soumya" icon={<FavoriteBorder />} checkedIcon={<Favorite/>}  onChange={checkfunc} /> <br/>

        <div>
          <h1>{gender}</h1>
          <span>Male</span>
          <Radio color='success' value="male" onClick={RadioFunc} checked={gender==="male"} /><br/>

          <span>Female</span>
          <Radio color='error' value="female" onClick={RadioFunc} checked={gender==="female"}   />
        </div><br/>

        {/* width=300 */}
        <div style={{height:400 , margin:40}}>
          <Slider color='secondary' size='small' defaultValue={100} max={200} step={10} marks={mark} valueLabelDisplay='auto' onChange={getValue} orientation='vertical' />
        </div>

        {/* Range slider */}

        <div style={{width:400 , margin:"40px auto"}}>
          <Slider color='success' value={val} max={100} onChange={updateVal}  />
        </div>

        {/* select box or select */}

        <Select
          value={age}
          
          onChange={handleChange}
         
        >
          <MenuItem value={1}>Select Age</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select><br/><br/>

        <TextField label="enter" variant="standard" type='password' />

        <br/><br/>

        <Switch color='error' size='medium' onChange={getSwitch} />

        <br/><br/>

        <Box component='div' style={{border:"2px solid yellow" ,color:'black'}} >
          <Button style={{color:'green'}} >click here</Button>
        </Box>

        <Container style={{backgroundColor:"skyblue"}} maxWidth='lg'  >
            <h1>lg size means 1200px</h1>
        </Container>

        <Container style={{backgroundColor:"skyblue"}} maxWidth='md' >
            <h1>md size means 900px</h1>
        </Container>

        <Container style={{backgroundColor:"skyblue"}} maxWidth='sm' >
            <h1>sm size means 600px</h1>
        </Container>

        <Container style={{backgroundColor:"skyblue"}} maxWidth='xs' >
            <h1>xs size means 444px</h1>
        </Container>

        <Container style={{backgroundColor:"skyblue"}} fixed >
            <h1>fixed size </h1>
        </Container>

        <Grid container spacing={0} >
          <Grid item lg={3} sm={6} xs={12} style={{backgroundColor:'skyblue'}}>
            <h1>box1</h1>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{backgroundColor:'lightgreen'}}>
            <h1>box2</h1>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{backgroundColor:'skyblue'}}>
            <h1>box3</h1>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{backgroundColor:'lightgreen'}}>
            <h1>box4</h1>
          </Grid>
        </Grid> <br/> <br/>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>

        <br/> <br/>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} lg={3}>
             <h1 style={{backgroundColor:'skyblue',margin:0}}>block 1</h1>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
             <h1 style={{backgroundColor:'lightgray',margin:0}}>block 2</h1>
          </Grid>
          
          <Hidden only={['xs']}>
            <Grid item xs={12} sm={6} lg={3}>
              <h1 style={{backgroundColor:'lightgreen',margin:0}}>block 3</h1>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={6} lg={3}>
             <h1 style={{backgroundColor:'lightcyan',margin:0}}>block 4</h1>
          </Grid>
        </Grid>

        <br/> <br/>

        <AppBar position='static'>
           <Tabs value={valued} onChange={handleTabs} color='success'>
              <Tab label="item 1" color='success' />
              <Tab label="item 2" color='success' />
              <Tab label="item 3" color='success' />
           </Tabs>
        </AppBar>

        <br/> <br/>
    </div>
  );
}

export default App;
