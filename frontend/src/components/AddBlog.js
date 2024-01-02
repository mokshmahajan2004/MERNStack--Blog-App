import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const labelStyles={mb:1,me:2,fontSize:'24px',fontWeight:'bold'}
const AddBlog = () => {
  return (
    <div>
      <form>
        <Box
          border={3}
          borderColor={"green"}
          borderRadius={10}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin={3}
          display={"flex"}
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography fontWeight={'bold'} padding={3} color="black" variant="h2" textAlign={'center'} >Post Your Blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField />
          <InputLabel sx={labelStyles}>imageURL</InputLabel>
          <TextField />
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
