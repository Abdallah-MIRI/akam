########
# Script Downlad Youtube video
########
# from pytube import YouTube
 
# list_urls = ['https://www.youtube.com/watch?v=DkU9WFj8sYo',
#              'https://www.youtube.com/watch?v=D5NK5qMM14g']
 
# for url in list_urls:
 
#     try:
#         yt_obj = YouTube(url)
 
#         yt_obj.streams.get_highest_resolution().download()
#     except Exception as e:
#         print(e)
#         raise Exception('Some exception occurred.')
#     print('All YouTube videos downloaded successfully.')

########
# Script Downlad Youtube playlast Video
########
# from pytube import Playlist
 
# try:
#     playlist = Playlist('https://www.youtube.com/playlist?list=PLcow8_btriE11hzMbT3-B1sBg4YIc-9g_')
 
#     playlist.download_all(download_path='/Users/pankaj/temp')
 
# except Exception as e:
#     print(e)


#########
# Script Downlad Youtube Audio 
#########
from pytube import YouTube
 
youtube_video_url = 'https://youtu.be/McBUGzPSj-M'
 
try:
    yt_obj = YouTube(youtube_video_url)
 
    yt_obj.streams.get_audio_only().download(output_path='D:/القرآن الكريم', filename='audio')
    print('YouTube video audio downloaded successfully')
except Exception as e:
    print(e)