import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const cameraData = [
    {
        name: "Building A, Floor 1, Room 101",
        ipAddress: "123.456.789.000",
        description: "Kitchen camera",
        cameraType: "Hikvision",
        port: "8080",
        protocol: "RTSP",
        credentials: "admin:password",
        streamPath: "/live/stream",
        videoFormat: "MP4",
        networkConf: "Static IP",
        alertId: "ALERT001",
    },
];
const CameraTable = () => {

    return (
        <div className="w-full bg-white dark:bg-black rounded-md shadow-lg mt-8 mb-20">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Camera Type</TableHead>
                        <TableHead>Port</TableHead>
                        <TableHead>Protocol</TableHead>
                        <TableHead>Credentials</TableHead>
                        <TableHead>Stream Path</TableHead>
                        <TableHead>Video Format</TableHead>
                        <TableHead>Network Conf</TableHead>
                        <TableHead>Alert ID</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cameraData.map((camera, index) => (
                        <TableRow key={index}>
                            <TableCell>{camera.name}</TableCell>
                            <TableCell>{camera.ipAddress}</TableCell>
                            <TableCell>{camera.description}</TableCell>
                            <TableCell>{camera.cameraType}</TableCell>
                            <TableCell>{camera.port}</TableCell>
                            <TableCell>{camera.protocol}</TableCell>
                            <TableCell>{camera.credentials}</TableCell>
                            <TableCell>{camera.streamPath}</TableCell>
                            <TableCell>{camera.videoFormat}</TableCell>
                            <TableCell>{camera.networkConf}</TableCell>
                            <TableCell>{camera.alertId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CameraTable;
