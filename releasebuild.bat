cmd /c ionic cordova build android --release --prod

cmd /c  jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore thelazycoder.keystore  -storepass iamlazy ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk TalkToMe

cmd /c zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk com.thelazycoder.talktome.apk