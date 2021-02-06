# Speaclear

Created at HackDavis 2021 by Lawrence Lin and Leo Pan.

Try it out at https://speaclear.online/!

Have you ever gave a presentation and you found yourself using filler words like "basically", "so", or "um" often? Speaclear (portmanteau of speak and clear!) helps you work towards using less filler words by recording your speech and identifying any filler words.

You can start recording by hitting the microphone button at the center top of the screen. Make sure to have microphone permissions enabled. As you speak into the mic, a live transcript will be generated and appear in the center left of the screen. You will also see a live pie chart being created and word frequencies will appear below that as well. Hit stop to stop recording and to save your transcript/recording. You can playback the audio in the center of the screen to hear yourself. Your saved transcripts/recordings can be found by clicking the "View History" button located in the top right corner of the site.

Once you finish recording, your transcript and audio file are saved in your browser. You can view any past transcripts by clicking "View History" in the top right corner.

## Technologies
We built this using JavaScript, React, and Ant Design. For speech recognition, we utilized [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) that uses the Web Speech API. We used canvasJS to build an elegant pie chart.


## Future Add-ons
When playing your saved recordings, we can make it so that the transcript appears in "real-time" just like it did when it was done live. This would be a nice-to-have feature solely for a nicer user experience. We can also provide more accurate and better feedback to users after analyzing their speech. A "point" system could work here. We can definitely improve the UI for this app as well.
