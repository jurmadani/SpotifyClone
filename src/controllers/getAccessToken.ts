import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { CLIENT_ID, CLIENT_SECRET } from "../backend/spotify-api";
import { accessSlice } from "../redux/accessSlice";

export async function getAccessToken(
    dispatch: Dispatch<AnyAction>
) {
    var authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters).then(result => result.json())
        .then(data => dispatch(accessSlice.actions.setAccessToken(data.access_token)))
}