
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@RestController
public class RtspController {

    @Autowired
    private RtspService rtspService;

    @GetMapping(value = "/stream", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getVideoStream() throws FrameGrabber.Exception, IOException {
      BufferedImage frame = rtspService.grabFrame();
      if(frame != null) {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(frame, "jpg", baos);
        return baos.toByteArray();
      }
      return new byte[0]; 
    }
   @GetMapping(value = "/multiframe", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<byte[]> getMultipleFrames() throws FrameGrabber.Exception, IOException{
      List<BufferedImage> frames = rtspService.grabFrames(5);
      List<byte[]> byteFrames = new ArrayList<>();
      for(BufferedImage frame: frames) {
          ByteArrayOutputStream baos = new ByteArrayOutputStream();
          ImageIO.write(frame, "jpg", baos);
          byteFrames.add(baos.toByteArray());
      }
        return byteFrames;
    }
}