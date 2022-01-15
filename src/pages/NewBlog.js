import React, { useContext } from "react";
import { LoginOutlined } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import { Formik, useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../helpers/firebase";
import { AuthContext } from "../context/AuthContext";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

const NewBlog = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      imgUrl: "",
      content: "",
    },

    // onSubmit: async (values) => {
    //   // setLoading(true)
    //   try {
    //     let user = await signInWithEmailAndPassword(
    //       auth,
    //       values.email,
    //       values.password
    //     );
    //     console.log(user);
    //     navigate("/");
    //   } catch (err) {
    //     alert(err.message);
    //   }
    //   console.log(currentUser);
    //   // setLoading(false)
    // },
  });

  console.log(currentUser);

  return (
    <Container
      sx={{
        marginTop: "2rem",
        height: "calc(80vh - 1rem)",
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        textAlign: "center",
        padding: "1rem",
      }}
      maxWidth="sm"
    >
      <Avatar
        sx={{
          margin: "1rem auto",
          bgcolor: "primary.main",
        }}
      >
        <AddToDriveIcon />
      </Avatar>

      <Typography sx={{ margin: "2rem" }} variant="h4">
        New Blog
      </Typography>
      <Formik>
        {({ values, handleSubmit, touched, errors, handleBlur }) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="title"
                  label="title*"
                  variant="outlined"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.title && formik.errors.title}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="imgUrl"
                  label="Image URL*"
                  variant="outlined"
                  value={formik.values.imgUrl}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.imgUrl && formik.errors.imgUrl}
                  error={formik.touched.imgUrl && Boolean(formik.errors.imgUrl)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="content"
                  label="content*"
                  variant="outlined"
                  multiline
                  inputProps={{ style: { height: "150px" } }}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.content && formik.errors.content}
                  error={
                    formik.touched.content && Boolean(formik.errors.content)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth item variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default NewBlog;
