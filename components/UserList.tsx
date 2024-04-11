

import React, { useState } from "react";
import { Grid } from "@mantine/core";
import UserCard from "./UserCard/UserCard";


const UserList = ({ usersData }: any) => {
  const [users, setUsers] = useState(JSON.parse(usersData.value));
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  
  const handleFollow = (id: number) => {
    if (followedUsers.includes(id)) {
      setFollowedUsers(followedUsers.filter((item) => item !== id));
    } else {
      setFollowedUsers([...followedUsers, id]);
    }
  };
  const checkFollow = (id: number) => {
    return followedUsers.includes(id);
  };
  return (
    <Grid m={"lg"}>
     
    </Grid>
  );
};

export default UserList;
