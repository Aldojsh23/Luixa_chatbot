import React, { use } from "react";
import { View, Text } from "react-native";
import {useState, useEffect} from "react"
import { supabase } from "../lib/supabase";

const Home_screen = () => {

    const [posts, setPosts ] = useState([]);
    useEffect (() => {
        const fetchPosts = async () => {
            const {data, error} = await supabase.from('proveedor').select('*')
            if (error){
                console.log(error)
            }else{
                setPosts(data)
            }
        }
        fetchPosts();

    }, []);

    console.log(posts)


    return(
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Menú</Text>
        </View>
    );

}

export default Home_screen;