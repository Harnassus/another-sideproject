import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        return await axios.get("http://localhost:5000/blogs").then((res) => setData(res.data)).catch((err) => console.log(err))
    }
    console.log("data", data);

    return (
        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            {data.length === 0 ? (
                <Typography>
                    No Blog Posts Yet
                </Typography>
            ) : data.map(blog => (
                <Card key={blog.id} sx={{marginBottom: 5}}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                {blog.author.charAt(0)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title={blog.title}
                        subheader={blog.date}
                    />
                    <CardMedia
                        component="img"
                        height="20%"
                        image={blog.image}
                        alt="Paella dish"
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <Typography variant="body2" sx={{fontSize: '1em'}}>
                           {blog.content.concat('.......')}
                        </Typography>
                        <Button sx={{color: '#666d78'}}>More</Button>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: '#666d78'}}/>} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                </Card>
            ))}
        </Box>
    );
};

export default Posts;
