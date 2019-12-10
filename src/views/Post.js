import React from 'react';
import Layout from '../common/Layout';
import { useQuery } from "react-apollo-hooks";
import gql from 'graphql-tag';

const  SINGLE_POST = gql`
    
    query getMyPost($id:ID!){
        getSinglePost(id:$id){
            title
            content
            cover
        }
    }
    
`;

function Post({match}) {
    const { id } = match.params;
    const {data, loading, error} = useQuery(SINGLE_POST, {variables:{id}});
    if(loading) return <h2>Cargando...</h2>;
    if(error) return <h2>Hubo un error</h2>;
    return(
        <>
            <Layout head={data.getSinglePost.title} subheading="" image={data.getSinglePost.cover}>
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <h2>{data.getSinglePost.title}</h2>
                                <p>{data.getSinglePost.content}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </>
    );
}

export default Post;
