import { SnackbarOrigin, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type signupSliceType = {
  email: string;
  password: string;
  name: string;
  birthDate: {
    month: string;
    day: number | null;
    year: number | null;
  };
};

export type userSliceType = {
  email: string;
  password: string;
  name: string;
  birthDate: {
    month: string;
    day: number | null;
    year: number | null;
  };
};

export type SidebarOptionType = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

export type accessSliceType = {
  accessToken: string;
  accessTokenForUserInformation:string,
};

type Album = {
  album_type: string;
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

type Artist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type ExternalIds = {
  isrc: string;
};

type ExternalUrls = {
  spotify: string;
};

export type Track = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

export type searchSliceType = {
  tracksArray: Track[];
};

export type TrackComponentType = {
  track: Track;
  id: number;
};

export type PlayerBodyHeaderType = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchInput:  React.Dispatch<React.SetStateAction<string>>;
  searchInput: string,
};


export type PlayerBodyType = {
  setSearchInput:  React.Dispatch<React.SetStateAction<string>>;
  searchInput: string,
};


export type playerSliceType = {
  currentPlayingTrack: string;
  currentPlayingTrackArtists: Artist[];
  currentPlayingTrackImage: string;
  isTrackPlaying: boolean;
  doesTrackHavePreview: boolean | null;
  currentPlayingTrackURL: string;
};

export interface State extends SnackbarOrigin {
  open: boolean;
}

export type spotifyUserSliceType = {
  displayName:string,
  imageURL:string
}