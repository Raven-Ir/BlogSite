import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BlogList({blogs, title}) {
    const navigate = useNavigate();
    
    return ( 
        <div>
            {blogs.map((blog) => (
                <Card key={blog.blogId} sx={{ 
                    maxWidth: 345 ,
                    marginTop: 3,
                    
                    }}>
                    <CardActionArea onClick={() => navigate("/blog/" + blog.blogId)}>
                        <CardContent>
                            <Typography component={"h6"} variant="h4" >
                                {blog.blogTitle}
                            </Typography>
                            <Typography component={"p"}>
                                {blog.authorName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
     );
}

export default BlogList;