import React, {useEffect, useState, useRef} from "react";
import {Container, Box, TextField, RadioGroup, 
        FormControlLabel, FormControl, Card, Radio, 
        Typography, Button, CardContent, Stack, CardHeader,
        Avatar, IconButton
        } from '@mui/material';
import { red } from '@mui/material/colors';
import PublishIcon from '@mui/icons-material/Publish';

const Apply = (props) =>{

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          koreanName: data.get('koreanName'),
        });
    };

    return(
      <>
        <Container maxWidth="sm">
          <Stack textAlign="left" marginTop={2}>
            <Typography fontSize={25} fontWeight='bold'>
                참가지원
            </Typography>
          </Stack>
          <Card sx={{marginTop : '1rem'}} variant="outlined">
          <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="recipe">
                  <PublishIcon/>
                </Avatar>
              }
              subheader="참가지원서와 작품을 첨부해주세요."
            />            
            <CardContent>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { mt: 2},
                  textAlign: 'left'
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Stack spacing={2} direction="row">
                  <TextField
                    type="email"
                    name="email"
                    label="email"
                    size="small"
                    margin="normal"
                  />
                  <TextField
                    type="password"
                    name="password"
                    label="password"
                    size="small"
                  />    
                </Stack>
                <Stack spacing={2} direction="row">
                  <TextField
                    type="text"
                    name="koreanName"
                    label="한글이름"
                    size="small"
                  />  
                  <TextField
                    type="text"
                    name="englishName"
                    label="영문이름"
                    size="small"
                  /> 
                </Stack>
                <Stack spacing={2} direction="row">
                  <TextField
                    type="text"
                    name="phone"
                    label="전화번호"
                    size="small"
                  />
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="sex"
                      defaultValue="male"
                      name="sex"
                      row
                    >
                      <Typography>
                        <span style={{marginRight : '1rem'}}>
                          성별 :
                        </span>
                        <FormControlLabel value="male" control={<Radio />} label="남" />
                        <FormControlLabel value="female" control={<Radio />} label="여" />
                      </Typography>

                    </RadioGroup>
                  </FormControl>   
                </Stack>
                <TextField
                  type="text"
                  name="college"
                  label="학교"
                  size="small"
                  fullWidth
                /> 
                <TextField
                  type="text"
                  name="address"
                  label="주소"
                  size="small"
                  fullWidth
                />    
                <TextField
                  type="text"
                  name="introduce"
                  label="자기소개"
                  multiline
                  fullWidth
                  rows={7}
                />              
                <TextField
                  type="text"
                  name="workTitle"
                  label="작품제목"
                  size="small"
                  fullWidth
                />   
                <br/>  
                <TextField
                  type="text"            
                  name="workInfo"
                  label="작품설명"
                  multiline
                  fullWidth
                  rows={7}
                />   
                <br/>
                <Stack textAlign="center">
                  <Button type="submit" variant="contained" color="primary">
                    지원하기
                  </Button>
                </Stack>                                                                 
              </Box> 
            </CardContent>                  
          </Card>
        </Container> 
        
      </>
    );
};

export default Apply;
