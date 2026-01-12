'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RoomPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const meetingId = params.roomId as string;
  const displayName = searchParams.get('name') || 'Guest';
  const isHost = searchParams.get('host') === 'true';
  
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [copiedType, setCopiedType] = useState<'id' | 'link' | null>(null);

  // Enhanced Jitsi meeting URL with better configuration
  const jitsiMeetingUrl = `https://meet.jit.si/TSOK${meetingId}#userInfo.displayName="${encodeURIComponent(displayName)}"&config.prejoinPageEnabled=false&config.startWithAudioMuted=false&config.startWithVideoMuted=false`;
  
  const meetingLink = typeof window !== 'undefined' 
    ? `${window.location.origin}/room/${meetingId}` 
    : '';

  useEffect(() => {
    // Countdown before redirect
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirect to Jitsi after countdown
      window.location.href = jitsiMeetingUrl;
    }
  }, [countdown, jitsiMeetingUrl]);

  const copyToClipboard = (text: string, type: 'id' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setCopiedType(type);
    setTimeout(() => {
      setCopied(false);
      setCopiedType(null);
    }, 2000);
  };

  const joinNow = () => {
    window.location.href = jitsiMeetingUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      
      <div className="max-w-3xl w-full">
        
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 p-8 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image 
                    src="/logo.png" 
                    alt="TSOK Logo" 
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">
                    Mosulod sa Conference
                  </h1>
                  <div className="flex items-center space-x-2 text-sm">
                    {isHost ? (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        HOST
                      </span>
                    ) : (
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        PARTICIPANT
                      </span>
                    )}
                    <span className="text-blue-100 font-medium">{displayName}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => router.push('/')}
                className="text-blue-200 hover:text-white transition-colors hover:bg-white/10 p-2 rounded-lg"
                title="Cancel"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            
            {/* Meeting Info */}
            <div className="space-y-4 mb-8">
              
              {/* Meeting ID */}
              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-2 uppercase tracking-wide">
                  Meeting ID
                </label>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-5 border border-white/30 shadow-inner">
                    <span className="text-3xl font-mono font-bold text-white tracking-widest">
                      {meetingId}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(meetingId, 'id')}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                    title="Copy Meeting ID"
                  >
                    {copied && copiedType === 'id' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Share Link */}
              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-2 uppercase tracking-wide">
                  Ipaambit ang Link / Share Link
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={meetingLink}
                    readOnly
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-5 border border-white/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
                  />
                  <button
                    onClick={() => copyToClipboard(meetingLink, 'link')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-5 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                    title="Copy Link"
                  >
                    {copied && copiedType === 'link' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Countdown Section */}
            <div className="text-center py-12 mb-8">
              {countdown > 0 ? (
                <div className="space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <div className="relative text-9xl font-bold text-white drop-shadow-2xl">
                      {countdown}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-white">
                      Nagpahilayo sa meeting room...
                    </p>
                    <p className="text-blue-200">
                      Redirecting to TSOK-Meet Conference
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-xl text-white font-bold">
                    Nag-abli sa conference room...
                  </p>
                  <p className="text-blue-200 text-sm">
                    Opening meeting space
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={joinNow}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              >
                <span className="flex items-center justify-center space-x-3">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">Mosulod Karon / Join Now</span>
                </span>
              </button>
              
              <button
                onClick={() => router.push('/')}
                className="sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-xl transition-all border border-white/30 hover:border-white/50"
              >
                Kanselahon / Cancel
              </button>
            </div>

            {/* Info Banners */}
            <div className="mt-8 space-y-4">
              {/* Jitsi Info */}
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-blue-200 mb-2">
                      Powered by Jitsi Meet - Professional Grade
                    </p>
                    <ul className="text-xs text-blue-100 space-y-1">
                      <li>✓ Walay limit sa oras / No time limits</li>
                      <li>✓ 100+ participants support</li>
                      <li>✓ Screen share, recording, live chat included</li>
                      <li>✓ HD video ug audio quality</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TSOK Tips */}
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-green-200 mb-2">
                      Tips para sa Meeting
                    </p>
                    <ul className="text-xs text-green-100 space-y-1">
                      <li>• I-mute ang mic kung dili mo mosulti</li>
                      <li>• Gamita ang chat para sa questions</li>
                      <li>• Siguroha nga stable ang internet connection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-black/30 backdrop-blur-sm px-8 py-5 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-2">
              <p className="text-blue-200 text-center sm:text-left">
                TSOK 2014 • Teachers Specialists Organization Kuwait
              </p>
              <p className="text-blue-300">
                Developed by <span className="text-blue-400 font-bold">Godmisoft</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
