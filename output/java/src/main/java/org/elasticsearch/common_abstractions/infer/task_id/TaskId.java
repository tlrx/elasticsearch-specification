
package org.elasticsearch.common_abstractions.infer.task_id;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class TaskId implements XContentable<TaskId> {
  private final String value;

  public TaskId(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      TaskId that = (TaskId) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static TaskId createFrom(XContentParser parser) throws IOException, XContentParseException { return new TaskId(parser.text()); }

  @Override
  public TaskId fromXContent(XContentParser parser) throws IOException, XContentParseException { return TaskId.createFrom(parser); }

}
