import React from 'react';
import Layout from '../common/Layout';
import gql from 'graphql-tag';
import {useQuery} from "react-apollo-hooks";
import PostPreview from '../components/PostPreview';

const ALL_POST = gql`

    query getAllPosts{
        getPosts{
            _id
            title
            author{
                first_name
                last_name
            }
        }
    }

`

function Home() {
    const {data, loading, error} = useQuery(ALL_POST);
    if(loading) return <h2>Cargando...</h2>
    if(error) return <h2>Hubo un error :(</h2>
    return(
        <>
            <Layout head="Bienvenidos" subheading="Sientete libre de leerlo todo">
                <main className="container">
                    <section className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {
                                data.getPosts.map((post) => (
                                    <PostPreview _id={post._id}
                                    title={post.title}
                                     author={post.author}
                                     key={post._id}
                                    />
                                ))
                            }
                        </div>
                    </section>
                </main>
            </Layout>
        </>);
}

export default Home;
