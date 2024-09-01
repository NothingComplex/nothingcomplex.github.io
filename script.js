function playAudio() {
    const audio = document.getElementById('auto-audio');
    audio.play();
    document.getElementById('status').textContent = 'THE PARTY HAS STARTED!';
}
function StopAudio() {
    const audio = document.getElementById('auto-audio');
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('status').textContent = 'the party has stopped. bruh';
}