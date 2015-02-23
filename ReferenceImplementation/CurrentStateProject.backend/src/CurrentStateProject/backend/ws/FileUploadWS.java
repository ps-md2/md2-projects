package CurrentStateProject.backend.ws;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.media.multipart.FormDataParam;

import com.sun.jersey.core.header.FormDataContentDisposition;

import CurrentStateProject.backend.Config;
import CurrentStateProject.backend.beans.WorkflowStateBean;
import CurrentStateProject.backend.entities.WorkflowState;

@Path("/upload")
@Stateless
public class FileUploadWS {

	@POST
	@Path("/file")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadFile(
			@FormDataParam("file") InputStream uploadedInputStream,
			@FormDataParam("file") FormDataContentDisposition fileDetail,
			@FormDataParam("path") String path) {

		// Path format //10.217.14.97/Installables/uploaded/
		System.out.println("path::" + path);
		String uploadedFileLocation = path + fileDetail.getFileName();

		// save it
		try {
			writeToFile(uploadedInputStream, uploadedFileLocation);

			String output = "File uploaded to : " + uploadedFileLocation;

			return Response.ok().entity(output).header("MD2-Model-Version", Config.MODEL_VERSION).build();
		} catch (IOException e) {
			return Response.serverError().header("MD2-Model-Version", Config.MODEL_VERSION).build();
		}

	}

	// save uploaded file to new location
	private void writeToFile(InputStream uploadedInputStream,
			String uploadedFileLocation) throws IOException {

		OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
		int read = 0;
		byte[] bytes = new byte[1024];

		while ((read = uploadedInputStream.read(bytes)) != -1) {
			out.write(bytes, 0, read);
		}
		out.flush();
		out.close();

	}




	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@PathParam("id") String id) {
		final WorkflowState workflowState = workflowStateBean
				.getWorkflowState(id);

		if (workflowState != null) {
			return Response.ok()
					.entity(new GenericEntity<WorkflowState>(workflowState) {
					}).header("MD2-Model-Version", Config.MODEL_VERSION)
					.build();
		} else {
			return Response.status(404)
					.header("MD2-Model-Version", Config.MODEL_VERSION).build();
		}
	}

}
