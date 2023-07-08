"use client";
import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const usedLoadSongUrl = (songs: Song) => {
  const supabaseClient = useSupabaseClient();
  if (!songs) return "";
  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(songs.song_path);
  return songData.publicUrl;
};
export default usedLoadSongUrl;
