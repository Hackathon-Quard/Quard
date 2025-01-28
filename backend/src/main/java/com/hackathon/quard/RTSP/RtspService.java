import org.bytedeco.javacv.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.List;

@Service
public class RtspService {

    @Autowired
    private RtspConfig rtspConfig;

    private FrameGrabber grabber;


    @PostConstruct
    public void init() throws FrameGrabber.Exception {
        
        String rtspUrl = rtspConfig.getUrl();
        if(rtspConfig.getUsername() != null && !rtspConfig.getUsername().isEmpty()) {
                rtspUrl = rtspUrl.replace("rtsp:
        }
         grabber = FrameGrabber.createDefault(rtspUrl);
            grabber.start();
    }

    @PreDestroy
    public void shutdown() throws FrameGrabber.Exception {
            grabber.stop();
            grabber.release();
    }

    public BufferedImage grabFrame() throws FrameGrabber.Exception, FrameGrabber.Exception {
        Frame frame = grabber.grabFrame();
        if (frame != null) {
            Java2DFrameConverter converter = new Java2DFrameConverter();
            return converter.getBufferedImage(frame);

        }
        return null;
    }

    public List<BufferedImage> grabFrames(int numFrames) throws FrameGrabber.Exception {
        List<BufferedImage> frames = new ArrayList<>();
        for (int i = 0; i < numFrames; i++){
          BufferedImage frame = grabFrame();
          if(frame != null){
            frames.add(frame);
          }
        }
      return frames;
    }
}